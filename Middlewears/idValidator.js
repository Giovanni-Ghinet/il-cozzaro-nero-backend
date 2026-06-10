import { idCheck } from "../Utils/function.js";




function idValidator(request, response, next){
    const id = Number(request.params.id.trim());
    if (!idCheck(id)) {
        response
            .status(400)
            .json({
                error: "l'ID passato non é valido, Deve essere un numero intero maggiore di zero.",
                result: null
            });
        return
    }; 
        request.validatedId = id;
            next();

}

export default idValidator