export function GerLeads(){
    let Campanha;
    let NumeroLead;
    let NomeRapidoLead;
    let NumeroTelefone;
    let EmailLead;
    let Log;
    return(
<div className="caixa-flutuante">
    <form>
    <h1>criar novo lead</h1>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="submit" value= "Cadastar"/>
    </form>

    <hr />
    buscar lead
    <input type="text" />
    <button>buscar</button>
</div>

    );
}