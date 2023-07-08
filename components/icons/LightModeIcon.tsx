import { IconProps } from "@/lib/types/IconProps";

export function LightModeIcon({ width, height, className, fill }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height || 48}
      viewBox="0 -960 960 960"
      width={width || 48}
      className={className}
      fill={fill}
    >
      <path d="M479.765-348.37q54.887 0 93.496-38.254 38.608-38.253 38.608-93.141 0-54.887-38.373-93.496-38.373-38.608-93.261-38.608-54.887 0-93.376 38.373-38.489 38.373-38.489 93.261 0 54.887 38.254 93.376 38.253 38.489 93.141 38.489ZM480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM70-445.935q-14.424 0-24.245-9.871-9.82-9.871-9.82-24.369 0-14.499 9.82-24.195 9.821-9.695 24.245-9.695h100q14.424 0 24.245 9.871 9.82 9.871 9.82 24.369 0 14.499-9.82 24.195-9.821 9.695-24.245 9.695H70Zm720 0q-14.424 0-24.245-9.871-9.82-9.871-9.82-24.369 0-14.499 9.82-24.195 9.821-9.695 24.245-9.695h100q14.424 0 24.245 9.871 9.82 9.871 9.82 24.369 0 14.499-9.82 24.195-9.821 9.695-24.245 9.695H790Zm-310.175-310q-14.499 0-24.195-9.82-9.695-9.821-9.695-24.245v-100q0-14.424 9.871-24.245 9.871-9.82 24.369-9.82 14.499 0 24.195 9.82 9.695 9.821 9.695 24.245v100q0 14.424-9.871 24.245-9.871 9.82-24.369 9.82Zm0 720q-14.499 0-24.195-9.82-9.695-9.821-9.695-24.245v-100q0-14.424 9.871-24.245 9.871-9.82 24.369-9.82 14.499 0 24.195 9.82 9.695 9.821 9.695 24.245v100q0 14.424-9.871 24.245-9.871 9.82-24.369 9.82ZM237.13-674.89l-57-56q-10.195-10.196-9.825-24.473.371-14.278 9.722-24.609 10.092-10.092 24.25-10.092t24.593 10.195l56.239 57q9.195 10.196 9.195 23.87 0 13.674-9.195 23.37-9.435 9.695-23.609 9.934-14.174.24-24.37-9.195Zm494 494.761-56.239-57q-9.195-10.196-9.195-24.125 0-13.93 9.695-23.615 9.696-10.195 23.489-10.195 13.794 0 23.99 10.195l57 55.761q10.195 10.196 9.825 24.473-.371 14.278-9.722 24.609-10.092 10.092-24.25 10.092T731.13-180.13Zm-56-494.761q-10.195-10.196-10.195-23.989 0-13.794 10.195-23.99l55.761-57q10.196-10.195 24.473-9.825 14.278.371 24.609 9.722 10.092 10.092 10.092 24.25T779.87-731.13l-57 56.239q-9.196 9.195-23.234 9.195-14.037 0-24.506-9.195ZM180.027-180.027q-10.092-10.092-10.092-24.25t10.195-24.593l57-56.239q9.996-10.195 23.65-10.195 13.655 0 23.698 10.195 10.587 10.196 10.587 23.989 0 13.794-10.195 23.99l-55.761 57q-10.196 10.195-24.473 9.825-14.278-.371-24.609-9.722ZM480-480Z" />
    </svg>
  );
}
