export class CPF {
    regioes = ['RS',
        'DF, GO, MS, MT, MT',
        'AC, AM, AP, PA, RO, RR',
        'CE, MA, PI',
        'AL, PB, PE, RN',
        'BA, SE',
        'MG',
        'ES, RJ',
        'SP',
        'SC, PR',
    ];
    private cpf: string;
    constructor(cpf: string) {
        this.cpf = cpf.replace(/\D/g, '');
        if(!this.isCPFValid()){
            throw new Error("O CPF é inválido");
        }
    }
    isSequence() {
        return this.cpf[0].repeat(11) === this.cpf;
    }
    isCPFValid() {
        if(this.cpf.length === 0 || this.isSequence()){
            return false;
        }
        let cleanCPF = this.cpf.slice(0, -2);
        for(let i = 0; i < 2; i++){
            const digito = this.generateNumber(cleanCPF);
            cleanCPF += digito;
        }
        return cleanCPF === this.cpf;
    }
    generateNumber(cleanCPF: string) {
        let total = 0;
        let reverse = cleanCPF.length + 1;
        for (const stringNumber of cleanCPF) {
            total += reverse * Number(stringNumber);
            reverse--;
        }
        const number = 11 - (total % 11);
        return number <= 9 ? String(number) : '0';
    }
    public getCPFRegion(): string {
        const cpfIndex: number = Number(this.cpf[this.cpf.length - 3]);
        return this.regioes[cpfIndex];
    }
}

