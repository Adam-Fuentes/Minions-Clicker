//variables principales
let write_lines = 0;
let money = 0;
let code_lines_max = 10000000;
let hdd = 10000000;
//variables para clicker zone
let minions = 0;
let minionsMax = 50;
let incressMinion = 1;
//variables para incrementar productividad y precio del codigo
let productivity = 1;
let priceCode = 1;
//variables para powers
let powerCostMoneyProductivity = 1000;
let powerQuantityProductivity = 0;
let powerCostFormerProductivity = 3000;
let powerQuantityFormerProductivity = 0;
let powerCostCoffeProductivity = 400;
let powerQuantityCoffeProductivity = 0;
//variables para info
let infoCostScrum = 100000;
let infoOffScrum = false;
let infoCostCto = 1000000;
let infoOffCto = false;
let infoCostPingPong = 5000;
let infoOffPingPong = false;
let infoCostReFruiting = 1000;
let infoOffReFruiting = false;
let infoCostVendor = 15000;
let infoOffVendor = false;
let infoCostCommunicationCampaign = 27500;
let infoOffCommunicationCampaign = false;
let infoCostAgency = 65000;
let infoOffAgency = false;
let infoCostCompressionSystem = 120000;
let infoOffCompressionSystem = false;
/* escuchador pal clicker */
document.getElementById("write_code").addEventListener("click",writeCode);
/* escuchadores para game zone*/
document.getElementById("buyMinion").addEventListener("click",buyMinion);
document.getElementById("addHDD").addEventListener("click",addHDD);
document.getElementById("upgradeOficce").addEventListener("click",addOficce);
/* escuchadores para productivity */
document.getElementById("addMoney").addEventListener("click", addMoney);
document.getElementById("addFormer").addEventListener("click", addFormer);
document.getElementById("addCoffe").addEventListener("click", addCoffe);
/* escuchamos para info zone */
document.getElementById("scrumButton").addEventListener("click",buyScrum);
document.getElementById("ctoButton").addEventListener("click",buyCto);
document.getElementById("pingPongButton").addEventListener("click",buyPingPong);
document.getElementById("reFruitingButton").addEventListener("click",buyReFruiting);
document.getElementById("vendorButton").addEventListener("click",buyVendor);
document.getElementById("communicationCampaignButton").addEventListener("click",buyCommunicationCampaign);
document.getElementById("agencyButton").addEventListener("click",buyAgency);
document.getElementById("compressionSystemButton").addEventListener("click",buyCompressionSystemButton);
//checkers para los botones
setInterval(checkMoney,100);//cada segundo salta y checka el dinero
setInterval(checkPower, 100);//cada segundo salta y checka el dinero de los powers
setInterval(checkInfo, 100);////cada segundo salta y checka el dinero de los info

function checkInfo() {
    if (minions >= 13 ) {
        if (money >=  infoCostScrum && infoOffScrum == false) {
            document.getElementById("scrumButton").disabled = false;
        }
        if (money >= infoCostCto && infoOffCto == false) {
            document.getElementById("ctoButton").disabled = false;
        }
        if (money >= infoCostPingPong && infoOffPingPong == false) {
            document.getElementById("pingPongButton").disabled = false;
        }
        if (money >= infoCostReFruiting && infoOffReFruiting == false) {
            document.getElementById("reFruitingButton").disabled = false;
        }
        if (money >= infoCostVendor && infoOffVendor == false) {
            document.getElementById("vendorButton").disabled = false;
        }
        if (money >= infoCostAgency && infoOffAgency == false) {
            document.getElementById("agencyButton").disabled = false;
        }
        if (money >= infoCostCommunicationCampaign && infoOffCommunicationCampaign == false) {
            document.getElementById("communicationCampaignButton").disabled = false;
        }
        if (money >= infoCostCompressionSystem && infoOffCompressionSystem == false) {
            document.getElementById("compressionSystemButton").disabled = false;
        }
    }
}

function buyCompressionSystemButton() {
    if (money >=  infoCostCompressionSystem) {
        //restamos precio
        money -= infoCostCompressionSystem;
        //aumentamos la capacidad de los hdd
        hdd = hdd * 2;
        //ponemos boton verde y on
        document.getElementById("compressionSystemOk").innerHTML="On";
        document.getElementById("compressionSystemOk").style.backgroundColor='#8DC487';
        //desabilitamos boton forever
        infoOffCompressionSystem= true;
        document.getElementById("compressionSystemButton").disabled = true;
    }
}

function buyCommunicationCampaign() {
    if (money >=  infoCostCommunicationCampaign) {
        //restamos precio
        money -= infoCostCommunicationCampaign;
        //aumentamos el precio0 de linea
        priceCode += 2;
        //ponemos boton verde y on
        document.getElementById("communicationCampaignOk").innerHTML="On";
        document.getElementById("communicationCampaignOk").style.backgroundColor='#8DC487';
        //desabilitamos boton forever
        infoOffCommunicationCampaign= true;
        document.getElementById("communicationCampaignButton").disabled = true;
    }
}

function buyAgency() {
    if (money >=  infoCostAgency) {
        //restamos precio
        money -= infoCostAgency;
        //aumentamos el precio0 de linea
        priceCode += 2;
        //ponemos boton verde y on
        document.getElementById("agencyOk").innerHTML="On";
        document.getElementById("agencyOk").style.backgroundColor='#8DC487';
        //desabilitamos boton forever
        infoOffAgency= true;
        document.getElementById("agencyButton").disabled = true;
    }
}

function buyVendor() {
    if (money >=  infoCostVendor) {
        //restamos precio
        money -= infoCostVendor;
        //aumentamos el precio0 de linea
        priceCode += 2;
        //ponemos boton verde y on
        document.getElementById("vendorOk").innerHTML="On";
        document.getElementById("vendorOk").style.backgroundColor='#8DC487';
        //desabilitamos boton forever
        infoOffVendor= true;
        document.getElementById("vendorButton").disabled = true;
    }
}

function buyReFruiting() {
    if (money >=  infoCostReFruiting) {
        //restamos precio
        money -= infoCostReFruiting;
        //aumentamos productividad
        productivity += 4;
        //ponemos boton verde y on
        document.getElementById("reFruitingOk").innerHTML="On";
        document.getElementById("reFruitingOk").style.backgroundColor='#8DC487';
        //desabilitamos boton forever
        infoOffReFruiting= true;
        document.getElementById("reFruitingButton").disabled = true;
    }
}

function buyPingPong() {
    if (money >=  infoCostPingPong) {
        //restamos precio
        money -= infoCostPingPong;
        //aumentamos productividad
        productivity += 2;
        //ponemos boton verde y on
        document.getElementById("pingPongOk").innerHTML="On";
        document.getElementById("pingPongOk").style.backgroundColor='#8DC487';
        //desabilitamos boton forever
        infoOffPingPong= true;
        document.getElementById("pingPongButton").disabled = true;
    }
}

function buyCto() {
    if (money >=  infoCostCto) {//1 000 000
        //restamos precio
        money -= infoCostCto;
        //aumentamos productividad
        productivity += 50;
        //ponemos boton verde y on
        document.getElementById("ctoOk").innerHTML="On";
        document.getElementById("ctoOk").style.backgroundColor='#8DC487';
        //desabilitamos boton forever
        infoOffCto= true;
        document.getElementById("ctoButton").disabled = true;
    }
}

function buyScrum() {
    if (money >=  infoCostScrum) {//100 ç000
        //restamos precio
        money -= infoCostScrum;
        //aumentamos productividad
        productivity += 4;
        //ponemos boton verde y on
        document.getElementById("scrumOk").innerHTML="On";
        document.getElementById("scrumOk").style.backgroundColor='#8DC487';
        //desabilitamos boton forever
        infoOffScrum = true;
        document.getElementById("scrumButton").disabled = true;
    }
}

function checkPower() {
    if (minions > 0) {
        if (money >= powerCostMoneyProductivity) {
            document.getElementById("addMoney").disabled = false;
        }else{
            document.getElementById("addMoney").disabled = true;
        }
    
        if (money >= powerCostFormerProductivity) {
            document.getElementById("addFormer").disabled = false;
        }else{
            document.getElementById("addFormer").disabled = true;
        }
    
        if (money >= powerCostCoffeProductivity) {
            document.getElementById("addCoffe").disabled = false;
        }else{
            document.getElementById("addCoffe").disabled = true;
        }
    }
}

function writeCode() {
    write_lines += 1 * productivity;
    document.getElementById("code_lines").innerHTML=write_lines;
    money += (write_lines * 0.1) * priceCode;
    document.getElementById("money").innerHTML=money.toFixed(2);
}

function buyMinion() {
    if(money >= 150 * incressMinion && minions < minionsMax){
        minions++;
        money -= 150 * incressMinion;   
        //document.getElementById("money").innerHTML=money.toFixed(2);    
        incressMinion++;                
        document.getElementById("minions_have").innerHTML=minions;
        setInterval(writeCode, 1000);  //cada segundo
    }
}  

function addMoney() {
    if(money >= powerCostMoneyProductivity){
        money-=powerCostMoneyProductivity;
        document.getElementById("money").innerHTML=money.toFixed(2);
        powerQuantityProductivity++;    
        powerCostMoneyProductivity = powerCostMoneyProductivity * 4;   
        document.getElementById("powerCostMoneyProductivity").innerHTML=powerCostMoneyProductivity.toFixed(2);
        document.getElementById("powerQuantityProductivity").innerHTML=powerQuantityProductivity;
        productivity += 4;
    }
}

function addFormer() {
    if(money >= powerCostFormerProductivity){
        money-=powerCostFormerProductivity;
        document.getElementById("money").innerHTML=money.toFixed(2);
        powerQuantityFormerProductivity++;    
        powerCostFormerProductivity = powerCostFormerProductivity * 10;   
        document.getElementById("powerCostFormerProductivity").innerHTML=powerCostFormerProductivity.toFixed(2);
        document.getElementById("powerQuantityFormerProductivity").innerHTML=powerQuantityFormerProductivity;
        productivity += 10;
    }
}

function addCoffe() {
    if(money >= powerCostCoffeProductivity){
        money-=powerCostCoffeProductivity;
        document.getElementById("money").innerHTML=money.toFixed(2);
        powerQuantityCoffeProductivity++;    
        powerCostCoffeProductivity = powerCostCoffeProductivity * 2;   
        document.getElementById("powerCostCoffeProductivity").innerHTML=powerCostCoffeProductivity.toFixed(2);
        document.getElementById("powerQuantityCoffeProductivity").innerHTML=powerQuantityCoffeProductivity;
        productivity += 2;
    }
}

function checkMoney() {//comprueba checks del click zone
    if(money >= 1000){
        document.getElementById("addHDD").disabled = false;
    }else{
        document.getElementById("addHDD").disabled = true;
    }

    if(money >= 10000){
        document.getElementById("upgradeOficce").disabled = false;
    }else{
        document.getElementById("upgradeOficce").disabled = true;
    }

} 

function addOficce() {
    minionsMax += 50;
    money -= 10000;
    document.getElementById("minions_max").innerHTML=minionsMax;
    document.getElementById("money").innerHTML=money.toFixed(2);
}

function addHDD() {
    code_lines_max += hdd;
    document.getElementById("code_lines_max").innerHTML=code_lines_max;
    //poner en documetn lineas nuevas
    money -= 1000;
    //poner en document dinero nuevo
    document.getElementById("money").innerHTML=money.toFixed(2);
}