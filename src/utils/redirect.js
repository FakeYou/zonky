import url from 'url';

const base = url.parse(process.env.BASE_URL);
const location = url.parse(window.location.href);

if (location.pathname !== '/') {
	const path = location.path.replace(base.path, '');
	const redirect = `${base.href}?redirect=${path}`;
	window.location.replace(redirect);
}
