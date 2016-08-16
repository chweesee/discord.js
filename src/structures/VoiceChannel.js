const ServerChannel = require('./ServerChannel');
const VoiceChannelDataStore = require('./datastore/VoiceChannelDataStore');

/**
 * Represents a Server Voice Channel on Discord.
 */
class VoiceChannel extends ServerChannel {
  constructor(guild, data) {
    super(guild, data);
    this.store = new VoiceChannelDataStore();
  }

  setup(data) {
    super.setup(data);
    this.bitrate = data.bitrate;
    this.userLimit = data.user_limit;
  }
}

module.exports = VoiceChannel;
