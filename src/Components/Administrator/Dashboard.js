export default function Dashboard() {
  return (
    <div className="w-full flex flex-col justify-between items-center">
      <div className="w-full flex flex-row justify-start items-start">
        <img
          src="https://tr.rbxcdn.com/fea7e9538a6a6a369f54f8c5ce744bd8/420/420/Image/Png"
          alt=""
          className="w-[100px] h-[100px] mr-[30px]"
        />
        <h1 className="text-[40px] p-[20px] text-[#f33434] font-[1000]">
          ADMINISTRATOR
        </h1>
      </div>
      <img
        src="https://image.shutterstock.com/image-vector/welcome-poster-spectrum-brush-strokes-260nw-1146069941.jpg"
        alt=""
        className="w-full h-[385px] rounded-xl"
      />
    </div>
  );
}
