/*
 *  Copyright 2014 David Farrell
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

exports.name = 'ibot_cmd_reloadmods'

exports.ibot_cmd$cmd_reloadmods = function(privmsg, command)
{
	if(exports.mods.call('ibot_master', 'test', privmsg.prefix.mask))
	{
		try
		{
			privmsg.reply('Reloading mods subsystem.')
			exports.mods.reloadSelf()
		}
		catch(e)
		{
			privmsg.reply('Failed to reload mods subsystem (' + e.type + ')')
			console.log(e.stack)
		}
	}
}

exports.ibot_help$help_reloadmods = function()
{
	return 'reloadmods: Reloads the mods subsystem.'
}
