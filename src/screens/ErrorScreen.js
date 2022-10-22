function ErrorScreen() {
  return (
    <div className="flex min-h-screen mx-auto flex-col bg-[#758283] items-center justify-center gap-16 text-center">
      <img src={require("../assets/error.gif")} alt="" />
    </div>
  );
}

export default ErrorScreen;
