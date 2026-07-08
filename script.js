let selectedIds = JSON.parse(localStorage.getItem("selectedSubjects")) || [];



const requiredArea = document.getElementById("requiredSubjects");
const optionalArea = document.getElementById("optionalSubjects");

const countText = document.getElementById("count");
const creditText = document.getElementById("credit");

const selectedList = document.getElementById("selectedList");





// 필수 과목 출력

function renderRequired(){


    requiredArea.innerHTML = "";


    subjects.required.forEach(subject=>{


        const div = document.createElement("div");

        div.className = "subject-card required";


        div.innerHTML = `

            <input 
                type="checkbox"
                checked
                disabled
            >

            <span class="subject-name">
                ${subject.name}
            </span>

            <span class="badge">
                필수 ${subject.credit}학점
            </span>

        `;


        requiredArea.appendChild(div);


    });


}







// 선택 과목 출력

function renderOptional(keyword=""){


    optionalArea.innerHTML="";



    const categories = {};



    subjects.optional.forEach(subject=>{


        if(
            keyword &&
            !subject.name.includes(keyword)
        ){
            return;
        }



        if(!categories[subject.category]){

            categories[subject.category]=[];

        }


        categories[subject.category].push(subject);



    });







    Object.keys(categories).forEach(category=>{


        const title=document.createElement("h3");

        title.textContent=category;


        optionalArea.appendChild(title);




        categories[category].forEach(subject=>{


            const div=document.createElement("div");

            div.className="subject-card";



            const checked =
            selectedIds.includes(subject.id)
            ? "checked"
            : "";



            div.innerHTML=`

                <input 
                    type="checkbox"
                    class="subjectCheck"
                    data-id="${subject.id}"
                    ${checked}
                >

                <span class="subject-name">
                    ${subject.name}
                </span>

                <span class="badge">
                    ${subject.credit}학점
                </span>

            `;



            optionalArea.appendChild(div);



        });



    });






    addCheckEvent();


}








// 체크 이벤트

function addCheckEvent(){


    document
    .querySelectorAll(".subjectCheck")
    .forEach(check=>{


        check.addEventListener("change",()=>{


            const id = check.dataset.id;



            if(check.checked){


                if(!selectedIds.includes(id)){


                    selectedIds.push(id);


                }


            }
            else{


                selectedIds =
                selectedIds.filter(item=>item!==id);


            }



            saveData();

            updateSummary();



        });


    });


}









// 저장

function saveData(){

    localStorage.setItem(
        "selectedSubjects",
        JSON.stringify(selectedIds)
    );

}








// 선택 현황 업데이트

function updateSummary(){


    let credit = 0;


    let count = 0;



    selectedList.innerHTML="";





    subjects.required.forEach(subject=>{


        credit += subject.credit;


    });







    selectedIds.forEach(id=>{


        const subject =
        subjects.optional.find(
            s=>s.id===id
        );



        if(subject){


            credit += subject.credit;

            count++;



            const li=document.createElement("li");

            li.textContent =
            `${subject.name} (${subject.credit}학점)`;


            selectedList.appendChild(li);


        }


    });






    countText.textContent=count;

    creditText.textContent=credit;



}








// 검색

document
.getElementById("searchInput")
.addEventListener("input",(e)=>{


    renderOptional(e.target.value);


});








// 초기화

document
.getElementById("resetBtn")
.addEventListener("click",()=>{


    selectedIds=[];


    saveData();


    renderOptional();

    updateSummary();


});









// 신청

document
.getElementById("submitBtn")
.addEventListener("click",()=>{


    const errors =
    validateSelection(selectedIds);



    if(errors.length>0){


        showError(errors.join("<br>"));


        return;

    }





    showSuccess();



});









// 오류창

function showError(message){


    document.getElementById("errorMessage")
    .innerHTML=message;


    document.getElementById("errorModal")
    .style.display="flex";


}






document
.getElementById("closeModal")
.addEventListener("click",()=>{


    document.getElementById("errorModal")
    .style.display="none";


});








// 완료창

function showSuccess(){


    const area =
    document.getElementById("resultArea");



    area.innerHTML="";



    const ul=document.createElement("ul");



    selectedIds.forEach(id=>{


        const subject =
        subjects.optional.find(
            s=>s.id===id
        );


        if(subject){


            const li=document.createElement("li");


            li.textContent=
            `${subject.name} (${subject.credit}학점)`;


            ul.appendChild(li);


        }


    });



    area.appendChild(ul);



    document
    .getElementById("successModal")
    .style.display="flex";


}







document
.getElementById("closeSuccess")
.addEventListener("click",()=>{


    document
    .getElementById("successModal")
    .style.display="none";


});







// 실행

renderRequired();

renderOptional();

updateSummary();