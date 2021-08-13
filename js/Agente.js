function reflex_agent(location, state){
    if (state=="Sucio") return "Limpio";
    else if (location=="A") return "Mover a la derecha";
    else if (location=="B") return "Mover a la izquierda";
}

function initial(states){
  var counter_case = new Map();
  var counter_operations = 0;
  counter_case.set("1",0);
  counter_case.set("2",0);
  counter_case.set("3",0);
  counter_case.set("4",0);
  counter_case.set("5",0);
  counter_case.set("6",0);
  counter_case.set("7",0);
  counter_case.set("8",0);
  
  counter_case = count_cases(states, counter_case);

  test(states, counter_case, counter_operations)

}

function test(states, counter_case, counter_operations){
      var location = states[0];		
      var state = states[0] == "A" ? states[1] : states[2];

      counter_operations++;


      var action_result = reflex_agent(location, state);
      states = getDirty(states);
      document.getElementById("log").innerHTML+="<br>".concat(counter_operations).concat(") Sector: ").concat(location).concat(" | Acción: ").concat(action_result);
      counter_case = count_cases(states, counter_case);

      if (action_result == "Limpio"){
        if (location == "A") states[1] = "Limpio";
        else if (location == "B") states[2] = "Limpio";
      }
      else if (action_result == "Mover a la derecha") states[0] = "B";
      else if (action_result == "Mover a la izquierda") states[0] = "A";		
  time = setTimeout(function(){ test(states, counter_case, counter_operations); analyze_case(counter_case);}, 1500);
}

function count_cases(states, counter_case){
  if((states[0] == "A") && (states[1] == "Sucio") && (states[2] == "Sucio")){
    counter_case.set("1", (counter_case.get("1") + 1));
    document.getElementById("case1_c").innerHTML=counter_case.get("1");
    document.getElementById("picture").src = "img/1_1.png";
  }
  else if((states[0] == "B") && (states[1] == "Sucio") && (states[2] == "Sucio")){
    counter_case.set("2", (counter_case.get("2") + 1));
    document.getElementById("case2_c").innerHTML=counter_case.get("2");
    document.getElementById("picture").src = "img/1_2.png";
  }
  else if((states[0] == "A") && (states[1] == "Sucio") && (states[2] == "Limpio")){
    counter_case.set("3", (counter_case.get("3") + 1));
    document.getElementById("case3_c").innerHTML=counter_case.get("3");
    document.getElementById("picture").src = "img/1_3.png";
  }
  else if((states[0] == "B") && (states[1] == "Sucio") && (states[2] == "Limpio")){
    counter_case.set("4", (counter_case.get("4") + 1));
    document.getElementById("case4_c").innerHTML=counter_case.get("4");
    document.getElementById("picture").src = "img/1_4.png";
  }
  else if((states[0] == "A") && (states[1] == "Limpio") && (states[2] == "Sucio")){
    counter_case.set("5", (counter_case.get("5") + 1));
    document.getElementById("case5_c").innerHTML=counter_case.get("5");
    document.getElementById("picture").src = "img/1_5.png";
  }
  else if((states[0] == "B") && (states[1] == "Limpio") && (states[2] == "Sucio")){
    counter_case.set("6", (counter_case.get("6") + 1));
    document.getElementById("case6_c").innerHTML=counter_case.get("6");
    document.getElementById("picture").src = "img/1_6.png";
  }
  else if((states[0] == "A") && (states[1] == "Limpio") && (states[2] == "Limpio")){
    counter_case.set("7", (counter_case.get("7") + 1));
    document.getElementById("case7_c").innerHTML=counter_case.get("7");
    document.getElementById("picture").src = "img/1_7.png";
  }
  else if((states[0] == "B") && (states[1] == "Limpio") && (states[2] == "Limpio")){
    counter_case.set("8", (counter_case.get("8") + 1));
    document.getElementById("case8_c").innerHTML=counter_case.get("8");
    document.getElementById("picture").src = "img/1_8.png";
  }
  return counter_case;
}

function getDirty(states){
  var option = Math.floor(Math.random() * (3 - 1) + 1);
  var state_option = Math.floor(Math.random() * (3 - 1) + 1);
  if(option == 2){
    if(states[1] == "Limpio" && states[2]=="Sucio"){
      states[1] = "Sucio";
      document.getElementById("log").innerHTML+="<br><b>-- Sector: ".concat("A").concat(" | Acción: ").concat("Sucio").concat("</b>");
    }
    else if(states[1] == "Sucio" && states[2]=="Limpio"){
      states[2] = "Sucio";
      document.getElementById("log").innerHTML+="<br><b>-- Sector: ".concat("B").concat(" | Acción: ").concat("Sucio").concat("</b>");
    }
    else if(states[1] == "Limpio" && states[2]=="Limpio"){
      if(state_option == 1){
        states[1] = "Sucio";
        document.getElementById("log").innerHTML+="<br><b>-- Sector: ".concat("A").concat(" | Acción: ").concat("Sucio").concat("</b>");
      }
      else if(state_option == 2){
        states[2] = "Sucio";
        document.getElementById("log").innerHTML+="<br><b>-- Sector: ".concat("B").concat(" | Acción: ").concat("Sucio").concat("</b>");
      }
    }
    return states;
  }
  return states;
}

function draw_table(counter_case){
  
}

function analyze_case(counter_case){
  if((counter_case.get("1") >= 2) && (counter_case.get("2") >= 2) && (counter_case.get("3") >= 2) && (counter_case.get("4") >= 2) 
  && (counter_case.get("5") >= 2) && (counter_case.get("6") >= 2) && (counter_case.get("7") >= 2) && (counter_case.get("8") >= 2)){
    clearTimeout(time);
  }
}

var states = ["A","Sucio","Sucio"];
initial(states);