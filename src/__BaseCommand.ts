import { ApplicationCommandRegistry, Command, RegisterBehavior } from "@sapphire/framework";
import { CommandInteraction, ContextMenuInteraction } from "discord.js";

export class MyCommand extends Command {
    public override async registerApplicationCommands(registry: ApplicationCommandRegistry) {
        registry.registerChatInputCommand({
            name: this.name,
            description: "Boops the specified user",
            options: [
                {
                    name: "user_to_boop",
                    description: "Who shall be booped today >:3",
                    type: "USER",
                }
            ]
        }, {
            /* If you don't specify any GUILD_IDS in env it registers globally */
            guildIds: process.env.GUILD_IDS?.split(",") ?? [],
            behaviorWhenNotIdentical: RegisterBehavior.Overwrite
        })
    }

    public override async chatInputRun(interaction: CommandInteraction) {
        return interaction.reply("Working!")
    }

    public override async contextMenuRun(interaction: ContextMenuInteraction) {
        return interaction.reply("Working (Context!!)")
    }
}