import myFormattedTime from "../functions/constFunctions";

export class PostModel  {
    constructor(description,userName,userId){
        this.postUserId = userId
        this.postUserName = userName
        this.postDescription = description
        this.postInsertedTime = ""
        this.postUpdatedTime = ""
    }
}