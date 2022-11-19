export interface RepoVerification{
    repositories:VerificationCode[]
}

export interface VerificationCode{
    id:number,
    state:number
}

