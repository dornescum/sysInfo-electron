// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
	let opSys = document.getElementById('op-version');
	const cpuUsage = document.getElementById('cpu-usage');
	const platform = document.getElementById('platform');
	const sysMemory = document.getElementById('sys-memory');
	const freeMemory = document.getElementById('free-memory');
	// const swapMemory = document.getElementById('swap-memory');
	const upTime = document.getElementById('upTime');
	const user = document.getElementById('user-name');

	const replaceText = (selector, text) => {
		const element = document.getElementById(selector);
		if (element) element.innerText = text;
	};
	console.log(process);
	opSys.innerText = process.arch;
	cpuUsage.innerText = process.cpuUsage().system;
	platform.innerHTML = process.platform;
	if (platform.innerHTML === 'darwin') {
		platform.innerHTML = 'Mac Os';
		platform.style.color = 'red';
	}
	if (platform.innerHTML === 'win') {
		platform.innerHTML = 'Windows';
		platform.style.color = 'blue';
	}
	sysMemory.innerHTML = process.getSystemMemoryInfo().total;
	freeMemory.innerHTML = process.getSystemMemoryInfo().free;
	// freeMemory.innerHTML = process.getSystemMemoryInfo().swapFree;
	console.log(process.env);
	upTime.innerHTML = Math.floor(process.uptime() /60) +' min';
	user.innerHTML = process.env.USER;

	for (const type of ['chrome', 'node', 'electron', 'arch']) {
		replaceText(`${type}-version`, process.versions[type]);
	}
});
