import { ApplicationCommandRegistry, Command, RegisterBehavior } from "@sapphire/framework";
import { CommandInteraction } from "discord.js";

export class Ping extends Command {
    public override async registerApplicationCommands(registry: ApplicationCommandRegistry) {
        registry.registerChatInputCommand({
            name: this.name,
            description: "Sends pong!",
        }, {
            /* If you don't specify any GUILD_IDS in env it registers globally */
            guildIds: process.env.GUILD_IDS?.split(",") ?? [],
            behaviorWhenNotIdentical: RegisterBehavior.Overwrite
        })
    }

    public override async chatInputRun(interaction: CommandInteraction) {
        return interaction.reply("Pong!")
    }
}