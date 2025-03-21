const HomePage = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-blue-900 flex items-center justify-center fixed inset-0 ">
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-cyan-500/20 rounded-full animate-ping opacity-70"></div>
      <div className="text-center space-y-6 max-w-2xl px-6 py-10 ">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent animate-pulse">
          Namaste Coder
        </h1>
        <p className="text-blue-100 text-lg md:text-xl leading-relaxed tracking-wide">
          <a className="font-semibold">
            Built with{" "}
            <a
              href="https://create-react-jaldi.vercel.app/"
              target="_blank"
              className="text-cyan-300"
              rel="noreferrer"
            >
              create-react-jaldi package
            </a>
          </a>{" "}
          - Your gateway to blazing fast React development
        </p>
      </div>
    </div>
  );
};

export default HomePage;
