const { request } = require('express');
const graphql = require('graphql')
const { people, Company } = require('../models/Tables');
const { GraphQLNonNull, GraphQLString } = graphql;
var SequelizeMock = require('sequelize-mock');
const { USER_DETAILS } = require('../Schema/Queries/UserQuery');
const UserDetailType = require('../Schema/TypeDefs/UserDetailType');
const StatusType = require('../Schema/TypeDefs/StatusType');
const CompanyType = require('../Schema/TypeDefs/CompanyType');

// var dbMock = new SequelizeMock();

// var UserMock = dbMock.define('users', {
//     UUID: "777fa93c-9ce9-41de-9249-009a5ada31e3",
//     userName: 'Pulkit',
//     userAge: 23,
//     userEmail: 'example@gmail.com',
//     userPhone: "9034449433",
//     userAddress: "Delhi Delhi 123",
//     userAadhar: 3253901234,
//     createdAt: new Date(),
//     updatedAt: new Date()
// }, {
//     instanceMethods: {
//         getUser: function () {
//             return this.get('userName') + ' ' + this.get('userAge');
//         },
//     },
// });


describe('getUser', function () {


    it("Validate type to be UserDetailType", () => {
        expect(USER_DETAILS.type).toBe(UserDetailType)
    })

    it("Validate adhar card type to be Int", () => {
        expect(USER_DETAILS.args.userAadhar.type).toBe(graphql.GraphQLInt)
    })




});



describe('Validate Status schema', () => {

    it('Validate Status Type Schema fields', () => {

        expect(StatusType.getFields()).toHaveProperty('success');

        expect(StatusType.getFields()).toHaveProperty('message');


        expect(StatusType.getFields()).toHaveProperty('error');



    })
})

describe('Validate Company Type schema', () => {

    it('Validate Company Type Schema fields', () => {

        expect(CompanyType.getFields()).toHaveProperty('doc_id');
        expect(CompanyType.getFields()).toHaveProperty('Company');
        expect(CompanyType.getFields()).toHaveProperty('position');
        expect(CompanyType.getFields()).toHaveProperty('location');

    })
})


// test("shouuld return true",async()=>{
   
//     expect(true).toBe(true)
// })