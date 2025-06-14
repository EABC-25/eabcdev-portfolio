import { useMainGlobalContext } from "../../context/GlobalContext";

const Overlay: React.FC = () => {
  const { state, dispatch } = useMainGlobalContext();

  return (
    <div className="page-overlay">
      <button
        className="overlay-close"
        type="button"
        onClick={() => {
          dispatch({ type: "CLOSE_OVERLAY", media: null });
        }}
      >
        X
      </button>
      <div
        className="overlay-media"
        style={{ backgroundImage: `url(${state.overlayMedia})` }}
      />
    </div>
  );
};

export default Overlay;
