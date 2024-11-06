/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/scenes/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Scenes */
    get: operations["scenes_scenes"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/scenes/areas/search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Search Areas */
    get: operations["scenes_search_areas"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    /** Area */
    Area: {
      /**
       * Svg Polygon Id
       * @description ID of the polygon in the SVG
       */
      svg_polygon_id?: string | null;
      /**
       * Title
       * @description Title of the area
       */
      title?: string | null;
      /**
       * Ru Title
       * @description Title in Russian
       */
      ru_title?: string | null;
      /**
       * Legend Id
       * @description ID of the legend (if any)
       */
      legend_id?: string | null;
      /**
       * Description
       * @description Description of the area
       */
      description?: string | null;
      /**
       * People
       * @description List of people for this area
       * @default []
       */
      people: string[];
      /**
       * Prioritized
       * @description Priority for multi-floor areas
       * @default false
       */
      prioritized: boolean;
      /**
       * Room Booking Id
       * @description ID of the room in Room Booking API (if any)
       */
      room_booking_id?: string | null;
    };
    /** HTTPValidationError */
    HTTPValidationError: {
      /** Detail */
      detail?: components["schemas"]["ValidationError"][];
    };
    /** LegendEntry */
    LegendEntry: {
      /**
       * Legend Id
       * @description ID of the legend
       */
      legend_id: string;
      /**
       * Color
       * @description Color of the legend
       */
      color?: string | null;
      /**
       * Legend
       * @description Description of the legend (may contain multiple lines)
       */
      legend?: string | null;
    };
    /** Scene */
    Scene: {
      /**
       * Scene Id
       * @description ID of the scene
       */
      scene_id: string;
      /**
       * Title
       * @description Title of the scene
       */
      title: string;
      /**
       * Svg File
       * @description Path to the SVG file in /static
       */
      svg_file: string;
      /**
       * Legend
       * @description Legend of the scene
       * @default []
       */
      legend: components["schemas"]["LegendEntry"][];
      /**
       * Areas
       * @description Areas of the scene
       * @default []
       */
      areas: components["schemas"]["Area"][];
    };
    /** SearchResult */
    SearchResult: {
      /** Scene Id */
      scene_id: string;
      area: components["schemas"]["Area"];
      /** Area Index */
      area_index: number;
    };
    /** ValidationError */
    ValidationError: {
      /** Location */
      loc: (string | number)[];
      /** Message */
      msg: string;
      /** Error Type */
      type: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type SchemaArea = components["schemas"]["Area"];
export type SchemaHttpValidationError =
  components["schemas"]["HTTPValidationError"];
export type SchemaLegendEntry = components["schemas"]["LegendEntry"];
export type SchemaScene = components["schemas"]["Scene"];
export type SchemaSearchResult = components["schemas"]["SearchResult"];
export type SchemaValidationError = components["schemas"]["ValidationError"];
export type $defs = Record<string, never>;
export interface operations {
  scenes_scenes: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Scene"][];
        };
      };
    };
  };
  scenes_search_areas: {
    parameters: {
      query: {
        query: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["SearchResult"][];
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
}
