function ErrorScreen() {
  return (
    <div className="flex min-h-screen mx-auto flex-col bg-[#1B98F5] items-center justify-center gap-16 text-center">
      <h1 className="text-4xl text-[#B4161B]">Oops</h1>
      <h1 className="text-6xl text-[#E21717]">Undefined Route</h1>
    </div>
  );
}

export default ErrorScreen;
