import { z } from "zod";
import { procedure, router, protectedProcedure } from "../utils";

export default router({
  hello: procedure.input(z.object({ name: z.string() })).query(({ input }) => {
    return `Hello ${input.name}`;
  }),
  random: procedure
    .input(z.object({ num: z.number() }))
    .mutation(({ input }) => {
      return Math.floor(Math.random() * 100) / input.num;
    }),
  headerData: protectedProcedure.query(({ ctx }) => {
    return {
      name: ctx.session.user.name ?? '',
      image: ctx.session.user.image ?? "https://assets.codepen.io/1222317/internal/avatars/users/default.png?format=auto&height=80&version=1531733027&width=80"
    };
  }),
});
