import { type Signal } from "@preact/signals";
import { COLORS, WIDTH } from "../shared/constants.ts";
import { Color } from "../shared/types.ts";
import { FileTextChanges } from "https://deno.land/x/ts_morph@20.0.0/ts_morph.js";

export function ColorPicker({
  selected,
}: {
  selected: Signal<Color>;
}) {
  return (
    <footer style="display: flex;
    position: absolute;
    justify-content: center;
    width: 100%;
    bottom: 5px;">
      <div style="display: flex;
    justify-content: center;
    width: 300px;">
        {COLORS.map((color) => (
          <button
            class={`
            w-8 h-8 border-4
              ${selected.value === color ? "border-white" : "border-gray-800"}
            `}
            style={`background-color: ${color};`}
            onClick={() => {
              selected.value = color;
            }}
          />
        ))}
      </div>
    </footer>
  );
}
