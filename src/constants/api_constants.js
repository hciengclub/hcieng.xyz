import config from '../config'

const auth = 'auth'
const account = 'account'
export const base = config.DEBUG ? 'http://localhost:8080' : 'https://hcieng-server.herokuapp.com';
export const email_endpoint = `${base}/email`;
export const register_endpoint = `${base}/${auth}/register`
export const login_endpoint = `${base}/${auth}/login`
export const account_info_endpoint = `${base}/${account}/info`