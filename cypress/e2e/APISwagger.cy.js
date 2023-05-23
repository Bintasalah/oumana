describe('test API',()=>{
    it('creation utilsateur'),()=>{
        cy.request('Post','https:practice.expandtesting.com/notes/api/api-docs/#/Users/post_users_register',{
            body:{
                "name":"Oury",
                "email":"oury2023@gmail.com",
                "password":"01052000",
            }
        }).then((reponse)=>{
            expect(response.status).to.equal(201);
            expect(response.body.name).to.equal('Oury');
            expect(response.body.email).to.equal('oury2023@gmail.com');
            expect(response.body.password).to.equal('01052000');
        })
    }
    it('creation note Home',()=>{
        cy.request('POST','https://practice.expandtesting.com/notes/api/api-docs/#/Notes/post_notes',{
            Headers:{
                accept:"application/json",
                "x-auth-token":'10d58c41bd50405f8e732dff3a2c21d460c2e3113f0446debe7cd9df5cf0816d'
            },
            body:{
                "title":"note1",
                "category":"Home",
                "description": "mangue",
    
            },   
        }).then((response)=>{
            expect(response.status).to.equal(200);
            expect(response.body.data.title).to.equal("note1");
            expect(response.body.data.category).to.equal("Home");
            expect(response.body.data.description).to.equal("mangue");
        })
    })
    it('creation note Work',()=>{
        cy.request('POST','https://practice.expandtesting.com/notes/api/api-docs/#/Notes/post_notes',{
            Headers:{
                accept:"application/json",
                "x-auth-token":'10d58c41bd50405f8e732dff3a2c21d460c2e3113f0446debe7cd9df5cf0816d'
            },
            body:{
                "title":"note2",
                "category":"Work",
                "description": "orange",
    
            },   
        }).then((response)=>{
            expect(response.status).to.equal(200);
            expect(response.body.data.title).to.equal("note2");
            expect(response.body.data.category).to.equal("Work");
            expect(response.body.data.description).to.equal("orange");

        })
    })
   
})


