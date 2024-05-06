interface DividerProps {
  width: string;
  thickness: number;
}

export default function Divider({ width, thickness }: DividerProps) {
  return (
    <div
      style={{ width: width, height: thickness, backgroundColor: "#f0f0f0c4" }}
    />
  );
}
