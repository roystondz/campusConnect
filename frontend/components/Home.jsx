import img from './hero.png'

const Home = () => {
  return (

    <div>
    <div className="flex flex-wrap px-11 ml-7">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Campus Connect
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              A  platform for students to connect with each other and with their campus community.

            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href=""
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                Register Now
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <svg
                  role="img"
                  width="24"
                  height="24"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <title>Login</title>

                </svg>
                <span> Login if you already have an account</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <img
              src={img}
              width="400"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <div>
        
        </div>
      </div>
      
  )
}

export default Home