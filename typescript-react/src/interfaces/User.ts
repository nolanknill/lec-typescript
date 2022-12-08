import ZodiacSign from "../enums/ZodiacSign";

interface User {
    id: number,
    name: string,
    zodiacSign: ZodiacSign
}

export default User;