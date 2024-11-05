package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.model.Account;
import com.tamthong.finance_tracker_api.repository.AccountRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountService {
    
    private final AccountRepository accountRepository;


    public AccountService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }


    //findById
    public Optional<Account> findById(Long id) {
        return accountRepository.findById(id);
    }
    
}
