import signup from "../../../assets/signup.png";
import { Input } from '../../../components/ui/input';
import { Checkbox } from '../../../components/ui/checkbox';
import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";
function SignUp() {


  return (
    <div className='flex'>
      <img className='h-auto max-w-xs absolute left-0 bottom-0' src={signup} alt="logo" />
      <div className='flex-col  absolute top-6 '>
        <h2 className='font-bold flex text-3xl'>SignUp</h2>
        <Input className='mt-4 min-w-150' type='name' placeholder='Enter First Name' />
        <Input className='mt-4 min-w-150' type='name' placeholder='Enter Last Name' />
        <Input className='mt-4 min-w-150' type='username' placeholder='Enter Username' />
        <Input className='mt-4 min-w-150' type='email' placeholder='Enter Email' />
        <Input className='mt-4 min-w-150' type='password' placeholder='Enter Password' />
        <Input className='mt-4 min-w-150' type='password' placeholder='Confirm Password' />

        <div className='flex mt-6 gap-4 items-center'>
          <Checkbox className="border-black" />
          <label htmlFor="" className="text-[#212427] font-medium text-base">I agree to all terms</label>
        </div>
        <Button className="min-w-30 flex mt-2 h-13" variant="default" size="lg">Register</Button>
        <p className="flex mt-3 text-sm text-muted-foreground text-center">Already have an account?{" "}
          <Link to="/" className="font-medium text-[#008BD9] hover:underline"> Sign In</Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
