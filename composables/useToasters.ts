/// <reference types="@nuxt/ui" />
import {useToast} from "@nuxt/ui/runtime/composables/useToast.js"

type ColorIcon = "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined;

type ToastData = {
  title: string;
  content: string;
  icon?: string;
  duration?: number;
  color?: ColorIcon;
};

const toastersTypes = [
  {
    name: "warnToast",
    icon: "mingcute:warning-line",
    color: "warning",
  },
  {
    name: "errorToast",
    icon: "i-material-symbols:error-outline-rounded",
    color: "error",
  },
  {
    name: "successToast",
    icon: "mdi:success",
    color: "success",
  },
] as const;

type ToasterName = (typeof toastersTypes)[number]["name"];

export const useToasters = () => {
  const toast = useToast();

  return Object.fromEntries(
    toastersTypes.map((t) => [
      t.name,
      (data: ToastData) => {
        toast.add({
          title: data.title,
          description: data.content,
          icon: data?.icon ?? t.icon,
          color: data?.color ?? t.color,
          duration: data?.duration ?? 5000,
        });
      },
    ]),
  ) as Record<ToasterName, (data: ToastData) => void>;
};
