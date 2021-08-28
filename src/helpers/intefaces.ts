/*
* No operation type of function
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type NoopFunction = (args?: any) => any;

/**
 * Input data
 * 
 * @export
 * @interface IInput
 */
export interface IUserInputs {
  identifier?: string,
  framePath: string,
  frameCount: number,
  scrollArea?: string
}

/**
 * Viewport
 * 
 * @export
 * @interface IViewport
 */
export interface IViewport {
  x: number,
  y: number
}

/**
 * Canvas Viewport
 * 
 * @export
 * @interface ICanvasViewport
 */
export interface ICanvasViewport {
  width: number,
  height: number
}

/**
 * Frame Sequence interface.
 *
 * @export
 * @interface IFrameSequence
 */
export interface IFrameSequence {
  start: string,
  sequence: number,
  padStart: number,
  ending: string,
  extension: string,
}

/**
 * Frame interface.
 *
 * @export
 * @interface IFrame
 */
export interface IFrame {
  path: string,
  count: number,
  image: IFrameSequence
}
