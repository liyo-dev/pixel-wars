import { type Signal } from "@preact/signals";
import { COLORS } from "../shared/constants.ts";
import { Color } from "../shared/types.ts";

export function ColorPicker({
  selected,
}: {
  selected: Signal<Color>;
}) {
  return (
    <footer class="flex gap-8">
      <div class="flex fixed bottom-4 right-0 left-0 justify-center">
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
