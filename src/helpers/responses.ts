import { createError, sendError, type EventHandlerRequest, type H3Event } from "h3";

type APIEvent = H3Event<EventHandlerRequest>;

export const respAPIHelper = {
  /**
   * Retourne une réponse HTTP401 indiquant une erreur d'authentification.
   */
  sendErrorAuth: (event: APIEvent) =>
    sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Authentifiction",
        message: "Vous devez vous authentifiez pour exécuter cette action.",
      }),
    ),
  sendInternalError: (event: APIEvent) =>
    sendError(
      event,
      createError({
        statusCode: 500,
        statusMessage: "Erreur interne",
        message: "Une erreur interne du site s'est produit.",
      }),
    ),
};
