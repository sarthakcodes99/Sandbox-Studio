const Rightpanel = ({html, css,  js}) => {
  return (
    <div className="h-full min-h-screen bg-white w-[50%]">
        <iframe
        height={2000}
        width={1100}
        title="Code Preview"
        srcDoc={`
          <style>${css}</style>
          ${html}
          <script>${js}</script>
        `}
        ></iframe>
    </div>
  )
}

export default Rightpanel;