const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });

const description = 'A reaction to showcase deez nuts.';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageReactionAdd', async (reaction, user) => {
  if (reaction.emoji.name === '💀' && reaction.count === 6) {
    const guild = client.guilds.cache.get('1129928861736509571');
    const schannel = guild.channels.cache.get('1174819165987680256');

    const embed = new MessageEmbed()
      .setColor('#14706066')
      .setAuthor(reaction.message.author.username, reaction.message.author.avatarURL())
      .addField(reaction.message.content, '')
      .addField('Jump URL', reaction.message.url);

    if (reaction.message.attachments.size > 0) {
      embed.setImage(reaction.message.attachments.first().url);
    } else {
      embed.setImage('https://media1.tenor.com/m/hp1qKBQclPMAAAAC/jujutsu-kaisen-shibuya-arc-sukuna-domain-expansion.gif');
    }

    embed.setTimestamp();

    await schannel.send({ embeds: [embed] });
  }
});

client.on('message', async message => {
  if (message.content === '?kys') {
    await message.channel.send('https://media1.tenor.com/m/9TN8lW2ubmYAAAAd/jjk-mahoraga.gif');
  }
});

client.login(process.env.TOKEN);
