import{test,expect} from '@playwright/test'
var userId;
test('Get User', async({request})=>{
    const response=await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json())
    expect(response.status()).toBe(200)
})
test('Create User',async({request})=>{
    const response=await request.post('https://reqres.in/api/users',
        {
            json:{"name":"banu","job":"automation"},
            headers:{"Accept":"application/json","x-api-key": "reqres-free-v1"}
        });
    var res=await response.json()
    console.log(res)
    expect(response.status()).toBe(201);
    userId=res.id
    console.log(userId)
})
test('Update User',async({request})=>{
   const response=await request.put('https://reqres.in/api/users/946',
    {
        data:{"name":"chitraa","job":"playwright automation"},
        headers:{"accept":"application/json","x-api-key": "reqres-free-v1"}
    });
    var res=await response.json();
    expect(response.status()).toBe(200);
    console.log(res);


})
test.only('Delete User',async({request})=>{
    const response=await request.delete('https://reqres.in/api/users/946',
        {
            headers:{"accept":"application/json","x-api-key": "reqres-free-v1"}

        });
    console.log(await response.status());
    expect(response.status()).toBe(204)

})