module.exports = function noCooldownNoLife(mod){
	const command = mod.command
	let enabled = false; //module disabled by default

	mod.command.add('Cooldowns', () => {
		enabled = !enabled;
	});

	mod.hook('S_START_COOLTIME_SKILL', 3, e=>{
		if(enabled){
		e.cooldown=0;return true;
		}
	});
}
