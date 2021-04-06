import axios from "axios"
import Cookies from "universal-cookie";


async function Account() {
    const cookies = new Cookies();
    let token = cookies.get("account");
    if (!token) return false;
    const Client = axios.create({
        withCredentials: true,
        headers: {
            "Accept": "application-json",
            "X-Requested-With": "XMLHttpRequest",
            autorization: `Bearer ${token}`
        }
    });
    try {
        const res = await Client.post("/api/account");
        return res.data;
    }
    catch {
        cookies.remove("account");
        return "Guest";
    }
}
export default Account;
