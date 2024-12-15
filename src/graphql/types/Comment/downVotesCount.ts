import { and, count, eq } from "drizzle-orm";
import { commentVotesTable } from "~/src/drizzle/tables/commentVotes";
import { Comment } from "./Comment";

Comment.implement({
	fields: (t) => ({
		downVotesCount: t.field({
			description: "Total number of down votes on the comment.",
			resolve: async (parent, _args, ctx) => {
				const [commentVotesCount] = await ctx.drizzleClient
					.select({
						count: count(),
					})
					.from(commentVotesTable)
					.where(
						and(
							eq(commentVotesTable.commentId, parent.id),
							eq(commentVotesTable.type, "down_vote"),
						),
					);

				if (commentVotesCount === undefined) {
					return 0;
				}

				return commentVotesCount.count;
			},
			type: "Int",
		}),
	}),
});