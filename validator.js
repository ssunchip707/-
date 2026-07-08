function validateSelection(selectedIds) {


    const errors = [];



    // 선택 과목 가져오기

    const selectedSubjects = subjects.optional.filter(subject =>
        selectedIds.includes(subject.id)
    );




    /*
        1. 선택 과목 검사
    */

    if(selectedSubjects.length === 0){

        errors.push(
            "선택한 선택 과목이 없습니다. 과목을 하나 이상 선택해주세요."
        );

    }





    /*
        2. 총 학점 검사
    */

    let totalCredit = 0;


    subjects.required.forEach(subject=>{

        totalCredit += subject.credit;

    });


    selectedSubjects.forEach(subject=>{

        totalCredit += subject.credit;

    });



    // 최대 학점

    const MAX_CREDIT = 34;



    if(totalCredit > MAX_CREDIT){

        errors.push(
            `최대 신청 가능 학점(${MAX_CREDIT}학점)을 초과했습니다. 현재 ${totalCredit}학점입니다.`
        );

    }





    /*
        3. 선수 과목 검사
    */


    selectedSubjects.forEach(subject=>{


        if(subject.prerequisite){


            if(!selectedIds.includes(subject.prerequisite)){


                const beforeSubject =
                subjects.optional.find(
                    s=>s.id === subject.prerequisite
                );


                errors.push(
                    `${subject.name}을(를) 신청하려면 ${beforeSubject.name}을(를) 먼저 선택해야 합니다.`
                );


            }

        }


    });








    /*
        4. 시간표 충돌 검사
    */


    const timeTable = {};



    selectedSubjects.forEach(subject=>{


        if(subject.time){


            if(timeTable[subject.time]){


                errors.push(
                    `${timeTable[subject.time]}과(와) ${subject.name}은(는) 같은 시간대에 개설되어 함께 신청할 수 없습니다.`
                );


            }
            else{


                timeTable[subject.time] = subject.name;


            }

        }


    });







    /*
        5. 중복 선택 검사
        (데이터상 방지용)
    */


    const unique = new Set(selectedIds);


    if(unique.size !== selectedIds.length){


        errors.push(
            "동일한 과목이 중복 선택되었습니다."
        );


    }






    return errors;

}