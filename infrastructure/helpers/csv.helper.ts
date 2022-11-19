import { Parser }  from 'json2csv';

export const csvHelper = (response:any) => {
    const fields = ['id', 'name', 'tribe', 'organization', 'coverage', 'codeSmells', 'bugs', 'vulnerabilities', 'hotspots', 'verificationState','state'];
    const opts = { fields };
    const parser = new Parser(opts);
    return parser.parse(response);
}