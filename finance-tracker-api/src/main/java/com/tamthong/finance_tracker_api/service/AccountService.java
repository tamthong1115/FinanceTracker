package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.AccountDTO;
import com.tamthong.finance_tracker_api.mapper.AccountMapper;
import com.tamthong.finance_tracker_api.model.Account;
import com.tamthong.finance_tracker_api.repository.AccountRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AccountService {
    
    private final AccountRepository accountRepository;
    private final AccountMapper accountMapper;
    private final UserService userService;

    public AccountService(AccountRepository accountRepository, AccountMapper accountMapper, UserService userService) {
        this.accountRepository = accountRepository;
        this.accountMapper = accountMapper;
        this.userService = userService;
    }


    //findById
    public Optional<Account> findById(Long id) {
        return accountRepository.findById(id);
    }


    @Transactional(readOnly = true)
    public List<AccountDTO> getAllAccountsByUser() {
        Long userId = userService.getCurrentUserId();
        return accountRepository.findByUserId(userId).stream()
                .map(accountMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<AccountDTO> getAllAccounts() {
        return accountRepository.findAll().stream()
                .map(accountMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public AccountDTO getAccount(Long id) {
        Account account = accountRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Account not found"));
        return accountMapper.toDTO(account);
    }

    @Transactional
    public AccountDTO createAccount(AccountDTO accountDTO) {

        Account account = accountMapper.toEntity(accountDTO);
        Account savedAccount = accountRepository.save(account);
        return accountMapper.toDTO(savedAccount);
    }

    @Transactional
    public AccountDTO updateAccount(Long id, AccountDTO accountDTO) {
        Account existingAccount = accountRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Account not found"));
        accountMapper.updateEntityFromDTO(accountDTO, existingAccount);
        Account savedAccount = accountRepository.save(existingAccount);
        return accountMapper.toDTO(savedAccount);
    }

    @Transactional
    public void deleteAccount(Long id) {
        accountRepository.deleteById(id);
    }
}
