import {mockData} from '../../src/service/mockData'
import {ChecksJson} from '../../src/controller/request/checksJson'
import {listCheckItems, validateChecksSubmit} from '../../src/service/verificationService'

describe('Verification Service', () => {
  describe('listCheckItems', () => {
    it('should return mock data', () => {
      const result = listCheckItems();
      expect(result).toEqual(mockData);
    });
  });

  describe('validateChecksSubmit', () => {
    it('should return true if any check result is "no"', () => {
      const checks: ChecksJson = {
        results: [
          { checkId: '1', result: 'yes' },
          { checkId: '2', result: 'no' },
        ],
      };
      expect(validateChecksSubmit(checks)).toBe(true);
    });

    it('should return true if all check results are "true"', () => {
      const checks: ChecksJson = {
        results: [
          { checkId: '1', result: 'true' },
          { checkId: '2', result: 'true' },
        ],
      };
      expect(validateChecksSubmit(checks)).toBe(true);
    });

    it('should return false if no check results are "no" and not all are "true"', () => {
      const checks: ChecksJson = {
        results: [
          { checkId: '1', result: 'yes' },
          { checkId: '2', result: 'maybe' },
        ],
      };
      expect(validateChecksSubmit(checks)).toBe(false);
    });

    it('should return false if no checks are provided', () => {
      const checks: ChecksJson = {
        results: [],
      };
      expect(validateChecksSubmit(checks)).toBe(false);
    });
  });
});
