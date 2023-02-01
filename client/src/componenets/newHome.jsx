const NewHome = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <a href="/uno">
        <button>Version 1</button>
      </a>
      <a href="/dos">
        <button>Version 2</button>
      </a>
      <a href="/tres">
        <button>Version 3</button>
      </a>
    </div>
  );
};

export default NewHome;
