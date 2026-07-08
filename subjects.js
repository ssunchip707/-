const subjects = {

    // 항상 선택되어 있는 필수 과목
    required: [

        {
            id: "kor_common",
            name: "공통국어",
            credit: 4,
            required: true
        },

        {
            id: "math_common",
            name: "공통수학",
            credit: 4,
            required: true
        },

        {
            id: "eng_common",
            name: "공통영어",
            credit: 4,
            required: true
        },

        {
            id: "social_common",
            name: "통합사회",
            credit: 3,
            required: true
        },

        {
            id: "science_common",
            name: "통합과학",
            credit: 3,
            required: true
        }

    ],





    // 학생이 선택하는 과목
    optional: [

        // 국어

        {
            id:"reading",
            category:"국어",
            name:"독서",
            credit:3
        },

        {
            id:"literature",
            category:"국어",
            name:"문학",
            credit:3
        },

        {
            id:"speech",
            category:"국어",
            name:"화법과 언어",
            credit:3
        },

        {
            id:"media",
            category:"국어",
            name:"언어와 매체",
            credit:3
        },



        // 수학

        {
            id:"algebra",
            category:"수학",
            name:"대수",
            credit:4
        },


        {
            id:"calculus",
            category:"수학",
            name:"미적분",
            credit:4,

            prerequisite:"algebra"
        },


        {
            id:"geometry",
            category:"수학",
            name:"기하",
            credit:3,

            prerequisite:"algebra"
        },




        // 사회

        {
            id:"economy",
            category:"사회",
            name:"경제",
            credit:3
        },


        {
            id:"world_history",
            category:"사회",
            name:"세계사",
            credit:3
        },


        {
            id:"politics",
            category:"사회",
            name:"정치와 법",
            credit:3
        },


        {
            id:"culture",
            category:"사회",
            name:"사회문화",
            credit:3
        },





        // 과학

        {
            id:"physics",
            category:"과학",
            name:"물리학Ⅰ",
            credit:3,

            time:"A"
        },


        {
            id:"chemistry",
            category:"과학",
            name:"화학Ⅰ",
            credit:3,

            time:"A"
        },


        {
            id:"biology",
            category:"과학",
            name:"생명과학Ⅰ",
            credit:3,

            time:"B"
        },


        {
            id:"earth",
            category:"과학",
            name:"지구과학Ⅰ",
            credit:3,

            time:"B"
        },





        // 정보

        {
            id:"information",
            category:"정보",
            name:"정보",
            credit:3
        },





        // 기술·가정

        {
            id:"technology",
            category:"기술·가정",
            name:"기술·가정",
            credit:3
        },





        // 제2외국어

        {
            id:"japanese",
            category:"제2외국어",
            name:"일본어Ⅰ",
            credit:3
        },


        {
            id:"chinese",
            category:"제2외국어",
            name:"중국어Ⅰ",
            credit:3
        }

    ]

};