import {useForm} from 'react-hook-form'

function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues :{
            example : '',
            exampleRequired : ''
        }
    });
    const onSubmit = data => console.log(data);

    console.log(watch("example")); 

    // console.log(errors);

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

        <input 
          
          {
            ...register("example")
          } 
          required
        />
        
        <p>{errors.example?.message}</p>
    
        <input {...register("exampleRequired", { required: true})} />

        {/* {errors.exampleRequired && <span>This field is required</span>} */}
        
        <input type="submit" />
    
    </form>
    
  )
}

export default Form
