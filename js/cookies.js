const checkCookie = (name, value) => {
	if (!name) {
		console.error('checkCookie takes in at least one argument');
		return;
	}
	if (!value) {
		return document.cookie.split(';').some((item) => item.trim().includes(name));
	}
	return document.cookie.split(';').some((item) => item.trim().includes(`${name} = ${value}`));
};

const setCookie = (name, value, expireInXDays = 1) => {
	if (!name) {
		console.error('setCookie takes in at least one argument');
		return;
	}
	const now = new Date();
	now.setTime(now.getTime() + expireInXDays * 24 * 60 * 60 * 1000);
	let expiresIn = `expires=${now.toUTCString()}`;
	if (!value) {
		document.cookie = `${name};${expiresIn};path=/`;
	} else {
		document.cookie = `${name}=${value};${expiresIn};path=/`;
	}
};

const getCookie = (name) => {
	const decodedCookie = decodeURIComponent(document.cookie);
	const cookieArray = decodedCookie.split(';');
	let result = '';
	cookieArray.forEach((cookie) => {
		while (cookie.charAt(0) === ' ') {
			cookie = cookie.substring(1);
		}
		if (cookie.indexOf(name) == 0) {
			if (cookie.includes('=')) {
				result = cookie.substring(name.length + 1, cookie.length);
			}
		}
	});
	return result;
};

const removeCookie = (name) => {
	if (!checkCookie(name)) return;
	const hasValue = getCookie(name);
	if (hasValue == '') {
		document.cookie = `${name}; Max-Age=-999999999;path=/`;
	} else {
		document.cookie = `${name}=; Max-Age=-999999999;path=/`;
	}
};
