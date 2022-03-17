export type Level ={
    title:string;
    color:string;
    icon:'down'|'up';
    imc: number[],
    yourImc?: number;
}

export const levels = [
{title:'Magreza',color:'#96A3Ab',icon:'down',imc:[0,18.5]},
{title:'Normal',color:'#0EAD69',icon:'up',imc:[18.5,24.9]},
{title:'Sobrepeso',color:'#E28039',icon:'down',imc:[25,30]},
{title:'Obesidade',color:'#C3423f',icon:'down',imc:[30.1,99]}
];

export const calculateimc = (height:number,weight:number)=>{
    const imc = weight /(height * height);

    for(let i in levels){
        if(imc >= levels[i].imc[0] && imc <= levels[i].imc[1]
        ){
            
            let levelsCopy: Level = {...levels[1]};
                levelsCopy.yourImc =parseFloat(imc.toFixed(2)) ;
                return levelsCopy;
        }
    }

    return null
}