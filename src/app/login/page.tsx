import FormInput from "@/components/formInput";
import SubmitButton from "@/components/submitButton";
import Form from "@/components/form";
import Image from "next/image";
import Link from "next/link";
import loginAction from "@/actions/loginAction";

const LoginPage = () => {

  return (
    <main className="flex min-h-screen w-full flex-col items-center p-4 pt-24 md:p-24 bg-primary">
      <Image src="logo.svg" alt="keirus logo" width="193" height="51" priority/>
      <div className="w-full md:w-[41.5rem] h-[34.75rem] bg-white rounded-[0.625rem] flex flex-col items-center justify-center gap-6 mt-[3.5625rem]">
        <Form submitHandle={loginAction} className="flex flex-col gap-6">
          <FormInput name="username" label="Username" type="text" autoComplete="username" className="w-full md:w-[32.5625rem] h-20 rounded-[0.3125rem] bg-white text-inputTextColor border-[#D9D9D9] border-solid border-2 px-[1.5625rem] py-[1.4375rem] text-base leading-[1.4063rem] font-normal"/>
          <FormInput name="password" label="Password" type="password" autoComplete="current-password" className="w-full md:w-[32.5625rem] h-20 rounded-[0.3125rem] bg-white text-inputTextColor border-[#D9D9D9] border-solid border-2 px-[1.5625rem] py-[1.4375rem] text-base leading-[1.4063rem] font-normal"/>
          <SubmitButton className="bg-black text-white w-full md:w-[32.3189rem] h-20 rounded-[0.3125rem] text-base leading-[1.4063rem] font-medium" type="submit" label="Login to Keirus admin"/>
        </Form>
        <Link href={"#"} className="text-linkTextColor underline">Forgot password</Link>
      </div>
    </main>
  )
}

export default LoginPage;