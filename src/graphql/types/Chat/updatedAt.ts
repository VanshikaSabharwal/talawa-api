import { TalawaGraphQLError } from "~/src/utilities/TalawaGraphQLError";
import { Chat } from "./Chat";

Chat.implement({
	fields: (t) => ({
		updatedAt: t.field({
			description: "Date time at the time the chat was last updated.",
			resolve: async (parent, _args, ctx) => {
				if (!ctx.currentClient.isAuthenticated) {
					throw new TalawaGraphQLError({
						extensions: {
							code: "unauthenticated",
						},
					});
				}

				const currentUserId = ctx.currentClient.user.id;

				const currentUser = await ctx.drizzleClient.query.usersTable.findFirst({
					columns: {
						role: true,
					},
					with: {
						chatMembershipsWhereMember: {
							columns: {
								role: true,
							},
							where: (fields, operators) =>
								operators.eq(fields.chatId, parent.id),
						},
						organizationMembershipsWhereMember: {
							columns: {
								role: true,
							},
							where: (fields, operators) =>
								operators.eq(fields.organizationId, parent.organizationId),
						},
					},
					where: (fields, operators) => operators.eq(fields.id, currentUserId),
				});

				if (currentUser === undefined) {
					throw new TalawaGraphQLError({
						extensions: {
							code: "unauthenticated",
						},
					});
				}

				const currentUserOrganizationMembership =
					currentUser.organizationMembershipsWhereMember[0];
				const currentUserChatMembership =
					currentUser.chatMembershipsWhereMember[0];

				if (
					currentUser.role !== "administrator" &&
					(currentUserOrganizationMembership === undefined ||
						(currentUserOrganizationMembership.role !== "administrator" &&
							(currentUserChatMembership === undefined ||
								currentUserChatMembership.role !== "administrator")))
				) {
					throw new TalawaGraphQLError({
						extensions: {
							code: "unauthorized_action",
						},
					});
				}

				return parent.updatedAt;
			},
			type: "DateTime",
		}),
	}),
});