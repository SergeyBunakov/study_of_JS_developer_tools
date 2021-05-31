import { createLogger } from "../logger";

it('should return stored logs', () => {
    const logger = createLogger('user login');

    expect(logger.getLogs()).toEqual([]);
});

it('should save log message', () => {
    const logger = createLogger('user login');
    logger.log('login succes');

    expect(logger.getLogs()).toEqual(['log - user login - login succes']);
});

it('should save errors', () => {
    const logger = createLogger('user login');
    logger.log('login failed');

    expect(logger.getLogs()).toEqual(['log - user login - login failed']);
});