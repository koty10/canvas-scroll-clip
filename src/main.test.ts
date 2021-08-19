import Boomerang from './main'
import { BoomerangError } from './helpers/error'

describe("Boomerang", () => {

  test("throw error if HTMLElement not found", () => {
    const bumer = () => {
      return new Boomerang('.elementNotFound');
    }

    expect(bumer).toThrowError(BoomerangError);
    expect(bumer).toThrowError(new RegExp('.elementNotFound'));
  });

  test("verify if default element is found", () => {
    document.body.innerHTML = '<div class="boomerang">Hello</div>';

    const mock = jest.spyOn(document, 'querySelector');
    const instance = new Boomerang();

    expect(document.querySelector).toBeCalledTimes(1);
    expect(document.querySelector).toReturn();

    expect(instance).toHaveProperty('selector', '.boomerang');
    expect(instance.element).not.toBe(undefined);

    mock.mockRestore();
  });

  test('verify that element with class name ".unique-element" is found', () => {
    document.body.innerHTML = '<div class="unique-element">Hello</div>';

    const mock = jest.spyOn(document, 'querySelector');
    const instance = new Boomerang('.unique-element');

    expect(document.querySelector).toBeCalledTimes(1);
    expect(document.querySelector).toReturn();

    expect(instance).toHaveProperty('selector', '.unique-element');
    expect(instance.element).not.toBe(undefined);

    mock.mockRestore();
  });

  test('verify callback is triggered at nextTick', done => {
    document.body.innerHTML = '<div class="boomerang">Hello</div>';
    const callback = jest.fn();

    new Boomerang('.boomerang', callback);

    expect.assertions(1);
    setTimeout(() => {
      // Init async test
      expect(callback).toBeCalledTimes(1);
      // Wait for async to finish before continueing to next test
      // OnFail 5000ms timeout
      done();
    });
  })
});